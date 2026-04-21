export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/1daf5d84-64ea-4807-83b5-f1613a8e0ad4/files/6a926da6-11dc-483f-9df5-0ff4de70eeca.jpg"
          alt="Салон японского автомобиля"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему выбирают нас</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Только проверенные японские марки — Toyota, Honda, Nissan, Lexus. Каждый автомобиль проходит техосмотр перед выдачей, 
          а страховка уже включена в стоимость аренды.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
            <span>Без залога при онлайн-бронировании</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
            <span>Подача авто в любую точку Сочи и аэропорт</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
            <span>Круглосуточная поддержка на дороге</span>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Забронировать
        </button>
      </div>
    </div>
  );
}