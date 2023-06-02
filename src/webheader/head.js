import logo from "../assets/logo.png";
export const Header=()=>{
    return (
        <header>
            <div className="bg-c1 py-3">
                <img className="inline" src={logo} alt=""/>
                <h1 className="text-c4 inline-block bold relative top-4 right-3">Mobile Application</h1>
                
            </div>
            
        </header>
    );
    }