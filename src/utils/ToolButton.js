import React,{Fragment} from 'react'

import IconButton  from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'

function ToolButton({children,tip,btnClassName,tipClassName,onClick,place}) {
    return (
        <Fragment>
            <Tooltip title = {tip} className={tipClassName} placement={place}>
                <IconButton className = {btnClassName} onClick={onClick}>
                    {children}
                </IconButton>
            </Tooltip>
        </Fragment>
    )
}

export default ToolButton
