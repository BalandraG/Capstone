import Header from "../Header/Header"

const PageWrapper = (props) => {
    return (
        <div className="flex-col container">
            <div className='main-content flex-col'>
                <Header />
                <div className='justify-center main-well'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default PageWrapper