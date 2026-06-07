const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-dark-text mb-4">404</h1>
        <p className="text-xl text-body-text mb-8">
          Oops! This page doesn't exist
        </p>
        <a href="/" className="text-red font-semibold hover:text-red-dark underline">
          Return to HanMaomo
        </a>
      </div>
    </div>
  );
};

export default NotFound;
