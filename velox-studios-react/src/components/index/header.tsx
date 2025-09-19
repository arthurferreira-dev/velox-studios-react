import ButtonsPage from "../../utils/buttons"

function HeaderIndex() {
    return (
        <header className="bg-gray-700 p-[13.5px] w-[100%] flex justify-between items-center">
            <img src="/public/velox-studios.png" width="70"/>
            <h1 className="text-center text-white text-xl max-[501px]:text-[18.5px]">VX Studios</h1>
            <div id="pages-buttons" className="flex flex-row flex-nowrap">
                {ButtonsPage(0)}
            </div>
        </header>
    )
}

export default HeaderIndex