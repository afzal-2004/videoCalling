/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export const VideoPage = () => {
  const { id } = useParams();
  const roomID = id;
  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = 1152612146;
    const serverSecret = "492db2f86ddfef8d58d35815190894b8";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Afzal"
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };

  return (
    <div
      className="myCallContainer   w-[100vw]  sm:h-[100vh] border border-red-500 "
      ref={myMeeting}
    ></div>
  );
};
