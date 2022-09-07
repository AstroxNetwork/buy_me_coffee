import { useModel } from '@modern-js/runtime/model';
import { useEffect, useState } from 'react';
import { Actor, HttpAgent } from '@dfinity/agent';
import { Button, Form, Space } from '@douyinfe/semi-ui';
import { Principal } from '@dfinity/principal';
import { IC } from '@astrox/sdk-web';
import {
  TransactionNFT,
  TransactionOptions,
} from '@astrox/sdk-web/build/types';
import { appModel } from '@/models/app';
import { idlFactory } from '@/canisters/buymecoffee';
import { BuyMeCoffee, PeopleItem } from '@/canisters/buymecoffee/types';
import { PeopleCard } from '@/components/PeopleCard';
import { BuyCoffeeModal } from '@/components/BuyCoffeeModal';

export const balanceFromString = (balance: string, decimal = 8): bigint => {
  const list = balance.split('.');
  const aboveZero = list[0];
  const aboveZeroBigInt = BigInt(aboveZero) * BigInt(1 * 10 ** decimal);
  let belowZeroBigInt = BigInt(0);
  const belowZero = list[1];
  if (belowZero !== undefined) {
    belowZeroBigInt = BigInt(
      belowZero.substring(0, decimal).padEnd(decimal, '0'),
    );
  }
  return aboveZeroBigInt + belowZeroBigInt;
};

export const Dashboard = () => {
  const [state] = useModel(appModel);
  const [peoples, setPeoples] = useState<PeopleItem[] | undefined>(undefined);
  const [myItem, setMyItem] = useState<PeopleItem | undefined>(undefined);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [choosePrincipal, setChoosePrincipal] = useState<string | undefined>(
    undefined,
  );
  const [chooseName, setChooseName] = useState<string | undefined>(undefined);
  const [chooseWallet, setChooseWallet] = useState<string | undefined>(
    undefined,
  );
  const { Option } = Form.Select;

  const { actor, principal } = state;

  const getAllPeople = async () => {
    const allPeople = await actor?.allPeople();
    setPeoples(
      allPeople?.sort((a, b) =>
        a.principal === Principal.fromText(principal) ? 0 : -1,
      ),
    );
    return allPeople;
  };

  const sendNft = async (values: TransactionNFT) => {
    console.log('values===', values);
    const ic = (window as any).ic.astrox as IC;
    const result = await ic.requestTransfer({
      from: ic.wallet,
      ...values,
      tokenIndex: Number(values.tokenIndex),
    } as TransactionOptions);
    console.log(result);
  };

  useEffect(() => {
    (async () => {
      await getAllPeople();
    })();
  }, [actor]);

  return (
    <>
      <Space style={{ marginBottom: 20 }}>
        <Form
          onSubmit={values => sendNft(values)}
          initValues={{ principal }}
          style={{ width: '100%' }}
          getFormApi={formApi => {}}>
          {({ formState, values, formApi }) => (
            <>
              <Form.Input
                field="to"
                label="To"
                style={{ width: '100%', maxWidth: 400 }}
                required={true}
                placeholder="To"
              />
              <Form.Input
                field="tokenIndex"
                label="TokenIndex"
                style={{ width: '100%', maxWidth: 400 }}
                required={true}
                placeholder="tokenIndex"
              />
              <Form.Input
                field="canisterId"
                label="CanisterId"
                style={{ width: '100%', maxWidth: 400 }}
                required={true}
                placeholder="canisterId"
              />
              <Form.Input
                field="tokenIdentifier"
                label="TokenIdentifier"
                style={{ width: '100%', maxWidth: 400 }}
                required={true}
                placeholder="tokenIdentifier"
              />
              <Form.Select
                field="standard"
                label="Standard"
                style={{ width: '100%', maxWidth: 400 }}
                required={true}
                placeholder="standard">
                <Option value="EXT">EXT</Option>
                <Option value="DIP20">DIP20</Option>
              </Form.Select>
              <Button
                type="primary"
                htmlType="submit"
                className="btn-margin-right">
                发送
              </Button>
            </>
          )}
        </Form>
      </Space>
      <div
        style={{
          borderRadius: '10px',
          border: '1px solid var(--semi-color-border)',
          flex: 1,
          padding: '32px',
        }}>
        <Space wrap={true}>
          {peoples?.map((item, idex) => (
            <PeopleCard
              key={item.principal.toText()}
              peopleItem={item}
              onBuyClick={chooseItem => {
                setModalVisible(true);
                setChooseName(chooseItem.people.name);
                setChoosePrincipal(chooseItem.people.id.toText());
                setChooseWallet(chooseItem.people.wallet);
              }}
            />
          ))}
        </Space>
        <BuyCoffeeModal
          checkout={async ({ wallet: thisWallet, amount }) => {
            const ic = (window as any).ic.astrox as IC;
            const result = await ic.requestTransfer({
              to: thisWallet,
              from: ic.wallet!,
              amount: balanceFromString(amount),
              sendOpts: {},
            });
            console.log({ result });
            if (result !== undefined) {
              setModalVisible(false);
              setChooseName(undefined);
              setChoosePrincipal(undefined);
              setChooseWallet(undefined);
            }
          }}
          modalVisible={modalVisible}
          setModalVisible={val => {
            setModalVisible(val);
            setChooseName(undefined);
            setChoosePrincipal(undefined);
            setChooseWallet(undefined);
          }}
          principal={choosePrincipal ?? ''}
          wallet={chooseWallet ?? ''}
          name={chooseName}
        />
      </div>
    </>
  );
};
