import './topics.module.css';
import { TopicButton } from '@personal/shared/ui';

/* eslint-disable-next-line */
export interface TopicsProps {}

export function Topics(props: TopicsProps) {
  return (
    <>
      <div className="md:container md:mx-auto p-20 bg-gray-100">
        <TopicButton topicName="Next.js" />
      </div>
      <div className="md:container md:mx-auto p-20 bg-gray-100">
        <TopicButton topicName="React" />
      </div>
    </>
  );
}

export default Topics;
