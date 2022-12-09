const firstStep = (ctx, next) => {
    ctx.value1 = 'passou pelo middleware 1'
    next()
}

const secondStep = (ctx, next) => {
    ctx.value1 += ' passou pelo middleware 2'
    next()
}

const thirdstep = (ctx, next) => {
    ctx.value1 += ' passou pelo middleware 3'
    console.log(ctx)
}

const exec = (ctx, ...midlewares) => {
    const execPasso = indice => {
        midlewares && indice < midlewares.length &&
            midlewares[indice](ctx, () => execPasso(indice + 1))        
    }
    execPasso(0);
}

const ctx = {}
exec(ctx, firstStep, secondStep, thirdstep)