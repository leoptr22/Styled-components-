import React from "react";
import { lista } from "../../../info";
import Card from "../../Card/Index.js";
import { Btn } from "../Index";
import { Box } from "../Index";

export const List = () => {
    return <Box>
        {
            lista.cargos.map(( cargo,i) => {
              return  <Card key={i} cargo ={cargo} />
                    
            
            })
}

    <Btn>Ver más</Btn>
    </Box>
}

export default List;