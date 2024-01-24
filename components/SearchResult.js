import { View, Text, FlatList } from 'react-native'
import React from 'react'

const SearchResult = ({data,search}) => {
  return (
    <View style={{padding:10}}>
        <FlatList 
            data={data}
            renderItem={({item})=>{
                if(item?.employeeName.toLowerCase().includes(search.toLowerCase())){
                    return(
                        <View style={{flexDirection:"row",marginVertical:10,gap:10}}>
                            <View style={{backgroundColor:"#4b6cb7",height:45,width:45,alignItems:"center",justifyContent:"center",borderRadius:8}}>
                                <Text style={{fontSize:20,fontWeight:600,color:"#fff"}}>{item?.employeeName.charAt(0)}</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:18,fontWeight:600}}>{item?.employeeName}</Text>
                                <Text style={{color:"gray"}}>{item?.designation} ({item?.employeeId})</Text>
                            </View>
                        </View>
                    )
                }
            }}
        />
    </View>
  )
}

export default SearchResult