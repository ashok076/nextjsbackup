import MyClient from "./myclient";
import MyServer from "./myserver";

export default function ClientPage(){
    return <div>
        {/* <MyServer/> */}
        <MyClient>
            <MyServer/>
        </MyClient>
    </div>
}