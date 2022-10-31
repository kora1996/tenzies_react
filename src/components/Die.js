import React from 'react';

export default function Die(props){
    



    const style = props.isKeep?{backgroundColor:'lightgreen'}:{backgroundColor:'tomato'}

    let face = ''

    if(props.value===1){face="first"}
    if(props.value===2){face="second"}
    if(props.value===3){face="third"}
    if(props.value===4){face="fourth"}
    if(props.value===5){face="fifth"}
    if(props.value===6){face="sixth"}


    let die 
    if(face==='first'){die= 
 <div onClick={(e)=>props.changeKeep(e, props.id)} className={`die  ${face + '-face'}`}  style={style}>
   <span className="dot"> </span>
 </div>}

    if(face==='second'){die= 
    <div onClick={(e)=>props.changeKeep(e, props.id)} className={`die  ${face + '-face'}`}  style={style}>
      <span class="dot"> </span><span class="dot"> </span>
      </div>
      }

    if(face==='third'){die=
     <div onClick={(e)=>props.changeKeep(e, props.id)} className={`die  ${face + '-face'}`}  style={style}>
      <span class="dot"></span><span class="dot"></span><span class="dot"></span>
      </div>
      }

    if(face==='fourth'){die=
     <div onClick={(e)=>props.changeKeep(e, props.id)} className={`die  ${face + '-face'}`}  style={style}>
      <div class="column">
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <div class="column">
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
    }

    if(face==='fifth'){die=
     <div onClick={(e)=>props.changeKeep(e, props.id)} className={`die  ${face + '-face'}`}  style={style}>
        <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
        <span className="dot"></span>
        <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
     </div>
    
    }

    if(face==='sixth'){die=
     <div onClick={(e)=>props.changeKeep(e, props.id)} className={`die  ${face + '-face'}`}  style={style}>
        <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
        <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
    </div>
 }

    return(
        <div>
            {die}
        </div>
    )
}