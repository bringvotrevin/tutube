# tutube

## Route

### Home (global)

- `/` : home
- `/upload` : getUpload, postUpload
- `/delete` : getDeleteVideo, postDeleteVideo
  <!-- - `/login` : login -->
  <!-- - `/join` : join -->

### User

router: `/user`

- `/profile` : editProfile
- `/delete` : deleteProfile
  <!-- - `/detail` -->
  <!-- - `/changePassword` -->

### Video

router: `/video`

- `/:id([0-9a-f]{24})` : watch
- `/:id([0-9a-f]{24})/edit` : editVideo, postEditVideo
- `/upload` : getUpload, postUpload
  <!-- - `/search` -->
  <!-- - `/share` -->
