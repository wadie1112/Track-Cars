const InfoSection = ({ image, title, subheading, content, reverse }) => {
    return (
      <div
        className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 py-10 bg-base-200 md:px-40`}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="card bg-primary shadow-xl">
            <figure>
              <img
                src={image}
                alt={title}
                className="rounded-lg object-cover"
              />
            </figure>
          </div>
        </div>
  
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl font-bold text-primary">{title}</h3>
          <h4 className="text-xl text-secondary mt-2">{subheading}</h4>
          <p className="mt-4 text-neutral">{content}</p>
        </div>
      </div>
    );
  };
  
  export default InfoSection;
  
  