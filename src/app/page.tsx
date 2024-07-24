// / home page
const Homepage = () => {
    return (
        <div className="min-h-screen flex flex-col h-[500px] w-full px-10 pt-0">
            {/* Content */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-around min-h-screen p-4">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <div className="max-w-4xl mx-auto text-white">
            <h1 className="text-4xl font-bold text-center mb-4 text-teal-500">
              Bukon!
            </h1>
            <h2 className="text-2xl text-center mb-8">
              Get your favorite products <br />delivered to your doorstep!
            </h2>

            <div className="text-center space-y-4 mb-8">
              <a
                href="/bukoni-app.apk"
                download
                className="bg-slate-800 hover:bg-slate-900 hover:text-green-400 text-white font-bold py-3 px-6 rounded-lg text-lg inline-block"
              >
                Download Android App
              </a>
              <p className="text-sm">
                Available for Android devices. iOS version coming soon!
              </p>
            </div>

            <div className="mt-8 text-center">
              <ul className="text-left inline-block">
                {[
                  "Browse 's full product catalog",
                  "Easy ordering process",
                  "Real-time delivery tracking",
                  "Exclusive in-app offers and discounts",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center mb-2 text-slate-700">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full pb-10 md:w-1/3 bg-green-100 p-4 rounded-lg">
          <p className="text-lg font-bold mb-8 mt-4">Check the latest updates!</p>
          <hr className="bg-slate-200 h-[2px] mb-8" />
          {/* Add more content for the updates section here */}
          <h2 className="text-md font-semibold">Kevin Runiga</h2>
          <p className="text-xs mb-6">&quot;Ever since I started selling on Bukon!, my brand got recurring sales. Thanks to their market team for doing a great job.&quot;</p>
          <h2 className="text-md font-semibold">Gabriella Keza</h2>
          <p className="text-xs mb-2">&quot;My journey with Bukon! started in 2024, my life changed for the better.&quot;</p>
        </div>
      </div>
        </div>
    );
};

export default Homepage; 