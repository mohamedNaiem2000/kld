import team1 from "../../../public/images/About/team1.jpg";
const AboutCard = () => {
  return (
    <div className="max-sm:px-[1rem] sm:px-[2.5rem] md:px-[3rem] lg:px-[4rem] xl:px-[12rem] w-full flex flex-col items-center py-16">
      <h2 className="text-2xl font-semibold text-center text-primary my-8">
        More About Us
      </h2>
      <div className="sm:flex-row w-11/12">
        <div className="flex max-sm:flex-col sm:flex-col justify-between w-full mx-auto shadow-base rounded-xl md:flex-row">
          <img
            className="w-80 h-80 max-sm:w-full sm:w-full object-cover rounded-lg shadow-xl"
            src={team1}
            alt="Live from space album cover"
          />
          <div className="flex flex-col justify-center mx-8 max-sm:py-5 sm:py-5">
            <h6 className="text-lg font-medium md:text-xl mb-3 max-sm:text-center ">
              This is how it's began
            </h6>
            <p className="text-md leading-normal text-gray-700 font-inter max-sm:text-center">
              From the initial stages of brainstorming and ideation to the final
              implementation, our team works hand in hand, pooling our
              collective talents and perspectives. We foster an environment that
              encourages open communication, creative thinking, and mutual
              respect.
            </p>
          </div>
        </div>

        <div className="flex max-sm:flex-col sm:flex-col justify-between w-full mx-auto mt-20 shadow-base rounded-xl md:flex-row">
          <img
            className="w-80 h-80 max-sm:w-full sm:w-full object-cover rounded-lg shadow-xl max-sm:order-1 sm:order-1 md:order-2"
            src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Live from space album cover"
          />
          <div className="flex flex-col justify-center mx-8 max-sm:order-2 max-sm:py-5 sm:py-5 sm:order-2 md:order-1">
            <h6 className="text-lg md:text-xl font-medium mb-3 max-sm:text-center">
              Attention to details
            </h6>
            <p className="text-md leading-normal text-gray-700 font-inter max-sm:text-center">
              We are dedicated to provide our customers with the highest quality
              furniture that meets their lifestyle. Our team's commitment to
              meticulous craftsmanship, attention to detail, and a deep
              understanding of materials ensures that every piece we create
              reflects our passion for excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
