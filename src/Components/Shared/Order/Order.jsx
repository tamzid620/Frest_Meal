import aboutPhoto from '../../../../public/images/contactUs.jpg';

const Order = () => {
    return (
        <div>
                         {/* title section */}
                         <div
                style={{
                    backgroundImage: `url(${aboutPhoto})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '350px',
                    // marginTop:'30px'
                }}
                className="flex justify-center"
            >
                {/* title tag */}
                <div className="bg-black opacity-70 w-full h-full flex flex-col justify-center items-center">
                    <h1
                        style={{ fontFamily: 'Mooli, sans-serif' }}
                        className="text-3xl text-white font-semibold "
                    >
                        Order Now
                    </h1>
                    <img src="../../../../public/icons/hr.svg" alt="" />
                </div>
            </div>

            {/* information section  */}
            <div>
                
            </div>
        </div>
    );
};

export default Order;