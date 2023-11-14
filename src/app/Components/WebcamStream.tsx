
type streamProps = {
    isStreamAvailable:boolean
    url:string
}

const WebcamStream: React.FC<streamProps> = ({isStreamAvailable, url}) => {

  return <>
  <div className="absolute full">
      {isStreamAvailable && <p className="relative text-red left-4 -top-6 z-5" >&#9679;	live</p>}
  </div>

  <div className={`relative pb-[56.25%] overflow-hidden rounded-2xl ${isStreamAvailable && 'border-4 border-green-400'}`}>
    {isStreamAvailable ? <img className="w-full h-full object-cover absolute top-0 left-0" alt="stream" src={`${url}/stream`}></img> : <div className="text-black w-full h-full object-cover absolute top-0 left-0 border-4 border-gray rounded-2xl p-4 text-center flex justify-center items-center"><p>Stream is under construction or down!<br></br> Please come back later</p></div>}
  </div>
  </>;
};
export default WebcamStream;