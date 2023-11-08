import '@testing-library/jest-dom'
import { server } from './src/mock-services/init-msw'

beforeAll(() => { server.listen(); })
afterEach(() => { server.resetHandlers(); })
afterAll(() => { server.close(); })
