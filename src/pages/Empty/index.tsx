import {
  IllustrationNoContent,
  IllustrationNoContentDark,
} from '@douyinfe/semi-illustrations';
import { Button, Empty } from '@douyinfe/semi-ui';

interface EmptyPageProps {
  login: () => Promise<void>;
}

export const EmptyPage = ({ login }: EmptyPageProps) => (
  <Empty
    image={<IllustrationNoContent style={{ width: 150, height: 150 }} />}
    style={{ marginTop: 64 }}
    darkModeImage={
      <IllustrationNoContentDark style={{ width: 150, height: 150 }} />
    }
    title="Something Awesome Is Here"
    description="Hop in to get started">
    <div style={{ textAlign: 'center' }}>
      <Button
        style={{
          marginTop: 32,
          padding: '32px 80px',
          fontSize: 20,
          borderRadius: 32,
        }}
        theme="solid"
        size="large"
        type="primary"
        onClick={login}>
        Sign In With ME
      </Button>
    </div>
  </Empty>
);
