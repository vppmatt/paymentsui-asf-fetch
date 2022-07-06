import Menu from './Menu';
import './PageHeader.css'

const PageHeader = (props) => {

    return(
        <div className="pageHeader">
        <h1>Payments Application</h1>
        <Menu setSelectedPage={props.setSelectedPage} />
        </div>
    )

};

export default PageHeader;