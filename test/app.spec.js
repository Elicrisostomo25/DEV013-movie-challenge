import llamadoApi from '../src/lib/apiMovie.js'

describe ('llamado Api',()=>{
    it('hace el llamado a la Api', ()=>{
    global.fetch= jest.fn(()=>Promise.resolve({ok:"true",json:()=>Promise.resolve({results:[]})})) //salida    ()=>retorno implicito
    llamadoApi() 
        .then(result=>{
        console.log(result)
        expect(result.length).toBe(0)
        expect(result.length).not.toBe(12)
    })
    })
})

//AAA(Asercion)