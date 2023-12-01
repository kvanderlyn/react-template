import '@testing-library/jest-dom/vitest';
import { server } from './server'
import { afterAll, afterEach, beforeAll } from 'vitest';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())