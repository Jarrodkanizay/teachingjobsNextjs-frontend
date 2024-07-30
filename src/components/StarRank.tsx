type StarRankProps = {
  ranking?: number;
  onColor?: string;
  offColor?: string;
  size?: number;
  border?: string;
};

export const StarRank = ({
  ranking = 2,
  onColor = 'gold',
  offColor = 'lightgray',
  size = 26,
  border = '',
}) => {
  return (
    <section className="ranking flex flex-row gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          stroke={border}
        >
          <path
            fill={i < ranking ? onColor : offColor}
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </section>
  );
};
