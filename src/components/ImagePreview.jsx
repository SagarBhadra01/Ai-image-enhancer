import Loading from "./Loading";

const ImagePreview = (props) => {
    return (
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-md sm:max-w-lg md:max-w-5xl">
            {/* Uploaded Image */}
            <div className="bg-white shadow-2xl rounded-3xl overflow-hidden transition-transform transform hover:scale-105">
                <h2 className="text-xl sm:text-2xl font-bold text-center bg-gray-800 text-white py-2 sm:py-3">
                    Uploaded Image
                </h2>

                {props.uploaded ? (
                    <img
                        src={props.uploaded}
                        alt="Uploaded"
                        className="w-full h-auto object-contain p-2 sm:p-4"
                    />
                ) : (
                    <div className="flex items-center justify-center h-64 sm:h-80 md:h-96 bg-gray-100 text-gray-500">
                        No Image Selected
                    </div>
                )}
            </div>

            {/* AI Enhanced Image */}
            <div className="bg-white shadow-2xl rounded-3xl overflow-hidden transition-transform transform hover:scale-105">
                <h2 className="text-xl sm:text-2xl font-bold text-center bg-blue-800 text-white py-2 sm:py-3">
                    AI Enhanced Image
                </h2>

                {props.enhanced && !props.loading && (
                    <div className="relative">
                        <img
                            src={props.enhanced}
                            alt="Enhanced"
                            className="w-full h-auto object-contain p-2 sm:p-4"
                        />
                        <a
                            href={props.enhanced}
                            download="enhanced-image.png"
                            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 sm:py-3 sm:px-5 rounded-full shadow-lg transition-transform transform hover:scale-110"
                        >
                            Download
                        </a>
                    </div>
                )}

                {props.loading && <Loading />}

                {!props.enhanced && !props.loading && (
                    <div className="flex items-center justify-center h-64 sm:h-80 md:h-96 bg-gray-100 text-gray-500">
                        Enhanced Image will appear here
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImagePreview;
