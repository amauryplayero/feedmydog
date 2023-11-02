
type streamProps = {
    isStreamAvailable:boolean
    url:string
}

const WebcamStream: React.FC<streamProps> = ({isStreamAvailable, url}) => {

  return <>
    {isStreamAvailable ? <img className="w-full h-full object-cover absolute top-0 left-0" alt="stream" src={`${url}/stream`}></img> : <div className="text-black w-full h-full object-cover absolute top-0 left-0 border-4 border-gray rounded-2xl p-4 text-center flex justify-center items-center"><p>Stream is under construction or down!<br></br> Please come back later</p></div>}
  </>;
};
export default WebcamStream;