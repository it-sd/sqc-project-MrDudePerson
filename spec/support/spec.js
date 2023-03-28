const { verifyDatabaseQuery } = require('../../server.js')

describe('GET /health', function () {
  it('returns a status between 200 and 399', async function () {
    const response = await fetch('http://localhost:6090/health')
    expect(response.status).toBeGreaterThanOrEqual(200)
    expect(response.status).toBeLessThanOrEqual(399)
  })
})

describe('GET /', function () {
  it('returns a status between 200 and 399', async function () {
    const response = await fetch('http://localhost:6090/health')
    expect(response.status).toBeGreaterThanOrEqual(200)
    expect(response.status).toBeLessThanOrEqual(399)
  })
})

describe('verifyDatabaseQuery', function () {
  it('query returns the appropriate amount of rows', async function () {
    const sql = 'SELECT COUNT(entry_id) FROM journal_entry;'
    const results = await verifyDatabaseQuery(sql)
    expect(results.rows[0].count.toBe(5))
  })
})
