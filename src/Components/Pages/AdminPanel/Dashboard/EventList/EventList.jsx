import { HiDocumentText } from "react-icons/hi";
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";

const EventList = () => {
    return (
        <div className="border">
            <div className="card">
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <div><h4 className="card-title mb-1t text-white">Event List</h4></div>
                        <div><p className="text-muted mb-1">Your data status</p></div>
                    </div>
                    <div>
                                
                            <div className="flex justify-between">
                                    <div className="flex items-center">
                                        <div className="bg-meta-5 p-3 rounded-xl me-2"><HiDocumentText className="w-5 h-5 text-white" /></div>
                                        <div ><h6 className=" text-white">Family days</h6>
                                            <p className="">Mother's Day and Father's Day</p></div>
                                    </div>
                                    <div className="sm: ms-12 lg:ms-72">
                                        <p className="">15 minutes ago</p>
                                        <p className="">30 tasks, 5 issues </p>
                                    </div>
                                </div>
                            <hr className="my-3 " />

                            
                            <div className="flex justify-between">
                                    <div className="flex items-center">
                                        <div className="bg-meta-3 p-3 rounded-xl me-2"><BsFillCloudArrowDownFill className="w-5 h-5 text-white" /></div>
                                        <div ><h6 className=" text-white">Resolution Ruiners</h6>
                                            <p className="">Resolution Ruiner parties,</p></div>
                                    </div>
                                    <div className="sm: ms-12 lg:ms-72">
                                        <p className="">15 minutes ago</p>
                                        <p className="">30 tasks, 5 issues </p>
                                    </div>
                                </div>
                            <hr className="my-3 " />

                            
                            <div className="flex justify-between">
                                    <div className="flex items-center">
                                        <div className="bg-meta-7 p-3 rounded-xl me-2"><AiFillClockCircle className="w-5 h-5 text-white" /></div>
                                        <div ><h6 className=" text-white">Groundhog Day</h6>
                                            <p className=""> holiday season </p></div>
                                    </div>
                                    <div className="sm: ms-12 lg:ms-72">
                                        <p className="">15 minutes ago</p>
                                        <p className="">30 tasks, 5 issues </p>
                                    </div>
                                </div>
                            <hr className="my-3 " />

                            
                            <div className="flex justify-between">
                                    <div className="flex items-center">
                                        <div className="bg-meta-5 p-3 rounded-xl me-2"><HiDocumentText className="w-5 h-5 text-white" /></div>
                                        <div ><h6 className=" text-white">Valentine's Day</h6>
                                            <p className=""> host a singles night instead.</p></div>
                                    </div>
                                    <div className="sm: ms-12 lg:ms-72">
                                        <p className="">15 minutes ago</p>
                                        <p className="">30 tasks, 5 issues </p>
                                    </div>
                                </div>
                            <hr className="my-3 " />

                            
                            <div className="flex justify-between">
                                    <div className="flex items-center">
                                        <div className="bg-meta-5 p-3 rounded-xl me-2"><HiDocumentText className="w-5 h-5 text-white" /></div>
                                        <div ><h6 className=" text-white">Pi Day</h6>
                                            <p className="">March 14 is 3/14, </p></div>
                                    </div>
                                    <div className="sm: ms-12 lg:ms-72">
                                        <p className="">15 minutes ago</p>
                                        <p className="">30 tasks, 5 issues </p>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventList;