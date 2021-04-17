
import randomColor from '../randomColor';
import PropTypes from "prop-types";
import styled from 'styled-components'

   
const StatListItem = ({ data: { label, percentage }, quantity }) => {   


    const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  padding-top: 5px;
  border: 1px solid black;
 width: ${({ option }) => `calc(100% / ${option})`};
  background-color:${()=>randomColor()} ;
  `;

 return   (
    <Li option={quantity}  >
        <span >{label}</span>
        <span >{percentage}%</span>
    </Li>
)
};
StatListItem.propTypes = {
    data: PropTypes.shape({
        label: PropTypes.string,
        percentage: PropTypes.number,
    }),
    quantity: PropTypes.number.isRequired,
}

export default StatListItem;

//------------------------------JSS
/*
import { createUseStyles } from 'react-jss';
import randomColor from '../randomColor';
import PropTypes from "prop-types";

   const useStyles = createUseStyles({
        item: {
            width: (quantity)=>`calc(100% / ${quantity})`,
            height: 50,
            backgroundColor: () => randomColor(),
        },
        label: {
            padding: [5,0,5,0],
            display: 'block',
            minHeight: 20,
        },
         percentage: {
            display:'block'
        }
 
    })

const StatListItem = ( { data: { label, percentage },  quantity }) => { 
    const classes = useStyles(quantity);
 return   (
    <li className={classes.item}>
        <span className={classes.label}>{label}</span>
        <span className={classes.percentage}>{percentage}%</span>
    </li>
)
};
StatListItem.propTypes = {
    data: PropTypes.shape({
        label: PropTypes.string,
        percentage: PropTypes.number,
    }),
    quantity:PropTypes.number.isRequired
}
*/
