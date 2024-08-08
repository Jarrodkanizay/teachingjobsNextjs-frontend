type Props = { title?: any; words?: string[] };

const WordSwitcher = ({
  title = 'Find',
  words = [
    'Opportunity',
    'Connections',
    'Happiness',
    'Opportunity',
    'Connections',
  ],
}: Props) => {
  const cappedWords = words.slice(0, 5);

  return (
    <section className="word_switcher">
      <h3 className="sentence">
        <div className="word_slider_wrapper">
          <span className="mr-6">{title}</span>{' '}
          <div className="slidingVertical ">
            {cappedWords.map((word, index) => (
              <span key={index}>{word}</span>
            ))}
          </div>
        </div>
      </h3>
    </section>
  );
};

export default WordSwitcher;
