function Rate({ handleClick, selected }) {
  return (
    <div className="mt-4   flex justify-between">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`rounded-full p-3 hover:bg-orange hover:text-white text-gray-medium text-base bg-dark-blue focus:bg-gray-medium focus:text-white ${
            i === selected ? 'bg-gray-medium text-white' : ''
          }`}
        >
          <span className="w-5 h-5 block">{i}</span>
        </button>
      ))}
    </div>
  );
}

export default Rate;
