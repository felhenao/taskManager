const { send } = require('@sendgrid/mail')
const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'Fred',
    email: 'fred@example.com',
    password: 'fredsTesting1'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Donna',
        email: 'donna@example.com',
        password: 'DonnasProcess2'
    }).expect(201)
})

test('Should login existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('Should not login nonexisting user', async () => {
    await request(app).post('/users/login').send({
        name: 'wrongName',
        email: 'wrong@email.com',
        password: 'WrongPass7'
    }).expect(400)
})