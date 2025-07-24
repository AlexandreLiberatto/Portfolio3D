const Alert = ({ type, text }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center'>
        <div
          className={`p-8 ${
            type === "danger" ? "bg-red-800" : "bg-blue-800"
          } items-center text-indigo-100 leading-none rounded-md flex lg:inline-flex`}
          role='alert'
        >
          
          <p className='mr-2 text-left flex-1 text-lg'>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;