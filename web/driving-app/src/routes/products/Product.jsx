function Product({ item }) {
  return (
    <div className=''>
      <div
        key={item.id}
        className='bg-neutral-700 rounded-xl text-left aspect-[16/9] col-span-1'>
        <div>
          <img
            src={item.image}
            alt={item.name}
            className='mb-4 rounded-t-xl object-cover aspect-[16/9] w-full h-2/3'
          />
          <div className='px-3 pb-8'>
            <h3 className='text-lg font-bold mb-2'>{item.name}</h3>
            <p className='text-sm mb-2'>{item.description}</p>
            <span className='bg-gray-200 text-gray-700 text-xs font-semibold py-1 px-2 rounded-full mb-2'>
              {item.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
