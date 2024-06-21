'use client';

const TransitionText = ({ visible }: Props) => {
  return (
    <p className="block data-[visible=hidden]:hidden">
      {visible ? 'visible' : 'not visible'}
    </p>
  );
};

interface Props {
  visible: boolean;
}

export default TransitionText;
