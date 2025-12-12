import { useTheme } from "../context/theme"

const Card = () => {
    const { thememode } = useTheme()

    return (
        <div className={`${thememode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`} >
        <div className="min-h-screen">
                <h1>My name is sohan achhami.</h1>
                <div className='flex  gap-6'>
                    <div className="">This is react series</div>
                    <div className="">This is react series</div>
                    <div className="">This is react series</div>
                    <div className="">This is react series</div>
                    <div className="">This is react series</div>
                    <div className="">This is react series</div>
                    <div className="">This is react series</div>
                    <div className="">This is react series</div>
                    
                   
                </div>
            </div>
        </div>
    )
}

export default Card
