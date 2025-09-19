function ButtonsPage(pageName: number) {
    const Pagesname: string[] = ['Jogos']

    if (pageName === 0) {
        for (let name = 0; name < Pagesname.length; name++) {
            return (
                <button className="text-lg max-[500px]:text-base text-white">
                    {Pagesname[name]}
                </button>
            )
        }
    }
}

export default ButtonsPage