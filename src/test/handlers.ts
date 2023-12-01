import { HttpResponse, http } from 'msw'

const tokenResponse = {
    username: 'dev',
    firstName: 'Dev',
    lastName: 'Deverson',
    email: 'dev@email.com',
    jwt: 'eyJraWQiOiJRRlliTFdNclRLUElIWm13NzVHZ000TUcwblZYMHFZaEl2VktMZGN5Y3VVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2ZmUyNGEwZC1iMGU2LTQwYjEtOWMxYy1mNGIxZDBmZWI1ZTUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9GNm90YWpjTjIiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiIxOWF1M2lyNTlrY2M0azBnYWJjZGVsNWdtciIsIm9yaWdpbl9qdGkiOiJmZDFlZWFkYS1iOGFlLTQxYzQtODA2Yy1kNGFhNDA1YzQ1MTYiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6InBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjk5NTAwNjMyLCJleHAiOjE2OTk1MDQyMzIsImlhdCI6MTY5OTUwMDYzMiwianRpIjoiMGYyNDcyN2QtMzdmNS00NzMzLTg4ZGQtMzNkMmQ5YzVlNmUwIiwidXNlcm5hbWUiOiJrYXlsYSJ9.encryptionKeyPart',
    roles: null
}


export const handlers = [

    http.get('/api/auth/login', ({ request }) => {
        const url = new URL(request.url)
        const authCode = url.searchParams.get('authCode')
        if (!authCode || authCode === 'badAuthCode') {
            return HttpResponse.json(null, { status: 400 })
        }
        return HttpResponse.json(tokenResponse)
    }),
]