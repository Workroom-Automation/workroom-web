import workerIcon from './workerIcon.svg'
import appSquareIcon from './appSquare.svg'
const WorkerIcon = () => {
    return <img src={workerIcon} />
}
const AppSquareIcon = ({size}) => {
    return <img width={size} src={appSquareIcon} />
}
export {WorkerIcon, AppSquareIcon};