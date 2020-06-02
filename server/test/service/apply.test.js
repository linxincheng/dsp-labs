const assert = require('assert')
const mock = require('egg-mock')
const {
  app
} = require('egg-mock/bootstrap')

describe('service/apply/get', () => {
  it('should get exists apply', async () => {
    const ctx = app.mockContext()
    const address = 'AYMnqA65pJFKAbbpD8hi5gdNDBmeFBy5hS'
    const apply = await ctx.service.testnet.apply.get(address)
    assert(apply)
    assert(apply.address === address)
  })

  it('should get null when apply not exists', async () => {
    const ctx = app.mockContext()
    const nonExistAddr = 'a123'
    const apply = await ctx.service.testnet.apply.get(nonExistAddr)
    assert(!apply)
  })


  it('should create if not exist', async () => {
    const ctx = app.mockContext()
    const apply = {
      organizationName: 'test org',
      appName: 'test app',
      wechat: 'test wechat',
      phone: 'test phone',
      testnetAddress: 'AYMnqA65pJFKAbbpD8hi5gdNDBmeFBy5hj',
      remark: 'test remark'
    }
    const ret = await ctx.service.testnet.apply.create(apply)
    assert(ret)
  })
})
