const topic = ['2017', 'Dynamic Video Segmentation Network', ''];

const abstract = [
  `Collecting training data from the physical world is usually
  time-consuming and even dangerous for fragile robots, and
  therefore, recent advances in robot learning propose to use
  simulators as the training platform. Unfortunately, the reality
  gap between synthetic and real visual data prohibits directly
  migrating the models trained in virtual worlds to the real
  world. This paper proposes a modular architecture for tackling
  simulation- to-reality problem. The architecture separates the
  learning model into a perception module and a control policy
  module, and uses semantic image segmentation as the meta
  representation for relating these two modules. The perception
  module translates RGB images to semantic image segmentations.
  The control policy module employs deep reinforcement learning
  (RL) methods and takes image segmentations as its inputs.
  Experimental results show that our architecture outperforms all
  baseline methods in the virtual and real environments, and
  learns faster than them.`,
];

const proposedMethodology = [
  {
    id: 1,
    title: 'Adaptive Key Frame Scheduling Policy',
  },
  {
    id: 2,
    title: 'Decision Network & Training Methodology',
  },
  {
    id: 3,
    title: 'Frame Region Based Execution',
  },
];

const experimentalResults = [
  {
    id: 4,
    title: 'Dataset & Experiment Settings',
  },
  {
    id: 5,
    title: 'Validation of DVSNet',
  },
  {
    id: 6,
    title: 'Various DVSNet Configurations',
  },
  {
    id: 7,
    title: 'Frame Division',
  },
];

const conclusion = [
  `We present a DVSNet framework to strike a balance between quality and efficiency for semantic video
segmentation. The DVSNet framework consists of two major parts: a segmentation path and a spatial
warping path. The former is deeper and slower but highly accurate, while the latter is faster but less
accurate.  We propose to divide video frames into frame regions, and perform semantic segmentation for
different frame regions by different DVSNet paths. We explore the use of DN to determine which frame
regions should be forwarded to which DVSNet paths based on a metric called expected confidence score.
We further propose an adaptive key frame scheduling policy to adaptively adjust the update period of key
frames at runtime. We have performed extensive experiments for various configurations of DVSNet, and
showed that DVSNet outperforms contemporary state-of-the-art semantic segmentation models in terms of
efficiency and flexibility.`,
];

const DynamicVideo = {
  topic,
  abstract,
  proposedMethodology,
  experimentalResults,
  conclusion,
};

export default DynamicVideo;
