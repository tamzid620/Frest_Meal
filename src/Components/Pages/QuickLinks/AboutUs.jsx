import unknownPhoto from '../../../../public/images/Unknown.png'
import aboutPhoto from '../../../../public/images/AboutUs1.jpeg';

const AboutUs = () => {
    return (
        <div className="">
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
                <div className="bg-gray-800 opacity-70 w-full h-full flex flex-col justify-center items-center">
                    <h1
                        style={{ fontFamily: 'Mooli, sans-serif' }}
                        className="text-3xl text-white font-semibold "
                    >
                        About Us
                    </h1>
                    <img src="../../../../public/icons/hr.svg" alt="" />
                </div>
            </div>

            {/* information section  */}
            <div className="mt-10 ">
                <h1 className="flex text-center items-center font-semibold text-yellow-500 text-lg leading-7 mb-10">
                    Welcome to Fresh Meal, a destination for culinary enthusiasts seeking to embark on a global gastronomic adventure. We're passionate about uniting cultures through the language of food, believing that it's a bridge to understanding, a catalyst for connection, and a universal pleasure that transcends borders.<br />  Our diverse team of chefs, each with a rich tapestry of international culinary backgrounds, collaborates to craft innovative interpretations of iconic dishes from around the world. We blend tradition with innovation, infusing every creation with a touch of creativity while staying faithful to the essence of the originals. We're dedicated to making your dining experience a journey through flavors, offering lighter, brighter, and extraordinarily flavorful renditions of global classics.<br />  Having been fortunate to explore the far corners of the world, we've been humbled by the warmth and hospitality extended to us, often by those with the simplest means in the most remote locations. In many cultures, hosting travelers is an esteemed privilege, and we proudly embrace that tradition. Thank you for joining us on our culinary expedition to discover the world's diverse culinary treasures.<br /> Welcome to our culinary haven!<br /> Your Guides at Fresh Meal
                </h1>
                {/* our team seciton  */}
                <div>
                    {/* our team title */}
                    <div className="flex justify-center mt-10">
                        <div>
                            <h1 style={{ fontFamily: 'Mooli, sans-serif' }} className="flex justify-center text-3xl text-white font-semibold">- - - Our Team - - -</h1>
                            <img src="../../../../public/icons/hr.svg" alt="" />
                        </div>
                    </div>
                    {/* our team information */}
                    <div className='mt-10'>
{/* owner section  */}
                        <div className='mb-5'>
                            <div className='flex justify-center'>
                                <img className='w-[350px] rounded-xl bg-yellow-500' src={unknownPhoto} alt="" />
                            </div>
                            <h1 className='flex justify-center mt-3 font-semibold text-yellow-500 text-2xl uppercase'>Abdullah</h1>
                            <p className='flex justify-center font-semibold text-white uppercase'>Owner / Operator</p>
                        </div>
{/* manager section  */}
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
                            <div className='flex lg:justify-end md:justify-end sm: justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className='w-[350px] rounded-xl bg-yellow-500' src={unknownPhoto} alt="" />
                                </div>
                                <h1 className='flex justify-center mt-3 font-semibold text-yellow-500 text-2xl uppercase'>Babul</h1>
                                <p className='flex justify-center font-semibold text-white uppercase'>General Manager</p>
                            </div>
                            </div>
                            <div className='flex lg:justify-start md:justify-start sm: justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className='w-[350px] rounded-xl bg-yellow-500' src={unknownPhoto} alt="" />
                                </div>
                                <h1 className='flex justify-center mt-3 font-semibold text-yellow-500 text-2xl uppercase'>Bahar</h1>
                                <p className='flex justify-center font-semibold text-white uppercase'> Assistant General Manager</p>
                            </div>
                            </div>
                        </div>
{/* Chef section  */}
<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
                            <div className='flex lg:justify-end md:justify-end sm: justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className='w-[350px] rounded-xl bg-yellow-500' src={unknownPhoto} alt="" />
                                </div>
                                <h1 className='flex justify-center mt-3 font-semibold text-yellow-500 text-2xl uppercase'>Chris</h1>
                                <p className='flex justify-center font-semibold text-white uppercase'>Executive Chef</p>
                            </div>
                            </div>

                            <div className='flex lg:justify-center md:justify-center sm: justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className='w-[350px] rounded-xl bg-yellow-500' src={unknownPhoto} alt="" />
                                </div>
                                <h1 className='flex justify-center mt-3 font-semibold text-yellow-500 text-2xl uppercase'>Chormonai</h1>
                                <p className='flex justify-center font-semibold text-white uppercase'> Sous Chef</p>
                            </div>
                            </div>
                            
                            <div className='flex lg:justify-start md:justify-start sm: justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className='w-[350px] rounded-xl bg-yellow-500' src={unknownPhoto} alt="" />
                                </div>
                                <h1 className='flex justify-center mt-3 font-semibold text-yellow-500 text-2xl uppercase'>Chowdhory</h1>
                                <p className='flex justify-center font-semibold text-white uppercase'> Pastry Chef</p>
                            </div>
                            </div>


                        </div>

{/* Server section  */}
<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
                            <div className='flex lg:justify-end md:justify-end sm: justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className='w-[350px] rounded-xl bg-yellow-500' src={unknownPhoto} alt="" />
                                </div>
                                <h1 className='flex justify-center mt-3 font-semibold text-yellow-500 text-2xl uppercase'>Dostogir</h1>
                                <p className='flex justify-center font-semibold text-white uppercase'>Server</p>
                            </div>
                            </div>

                            <div className='flex lg:justify-center md:justify-center sm: justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className='w-[350px] rounded-xl bg-yellow-500' src={unknownPhoto} alt="" />
                                </div>
                                <h1 className='flex justify-center mt-3 font-semibold text-yellow-500 text-2xl uppercase'>Delowar</h1>
                                <p className='flex justify-center font-semibold text-white uppercase'>Server</p>
                            </div>
                            </div>
                            
                            <div className='flex lg:justify-start md:justify-start sm: justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className='w-[350px] rounded-xl bg-yellow-500' src={unknownPhoto} alt="" />
                                </div>
                                <h1 className='flex justify-center mt-3 font-semibold text-yellow-500 text-2xl uppercase'>Daud</h1>
                                <p className='flex justify-center font-semibold text-white uppercase'>Server</p>
                            </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;