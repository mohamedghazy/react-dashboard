 import './chart.css'
 import { LineChart, Line, XAxis, CartesianGrid, Tooltip,ResponsiveContainer } from 'recharts';
 const Chart =({title, data,dataKey,grid})=>{    
    return (
       <div className='chart'>
          <h3 className='chartTitle'>
             {title}
          </h3>
          <ResponsiveContainer width='100%' aspect={4/1}>
            <LineChart
            data={data}
             >
               {grid && <CartesianGrid strokeDasharray="3 3" />}
               <XAxis dataKey="name"  stroke='#5550bd'/>
               <Tooltip />
               <Line type="monotone" dataKey={dataKey}stroke="#8884d8"  />
            </LineChart>
          </ResponsiveContainer>
       </div>
    )
 }
 export default Chart