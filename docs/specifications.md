# Specifications
This document describes resources, their endpoints, and corresponding components.

## Art

### Views
| Component | Method | Endpoint | Remarks |
| --------- | ------ | -------- | ------  |
| `ArtCardView` | - | - | [MUI Card](https://mui.com/components/cards/) |
| `ArtDetailView` |  `GET` | `/art/id` |  |
| `ArtGridView` | `GET` | `/art` | [MUI Grid](https://mui.com/components/grid/) of `ArtCardView`s |

### Forms
| Component | Method | Endpoint | Remarks |
| --------- | ------ | -------- | ------  |
| `ArtCreateForm` | `POST` | `/art` |  |
| `ArtUpdateForm` |  `PUT` | `/art/id` |  |
| `ArtDeleteForm` | `DELETE` | `/art/id` |  |

## User

### Views
| Component | Method | Endpoint | Remarks |
| --------- | ------ | -------- | ------  |
| `UserCardView` | - | - | [MUI Card](https://mui.com/components/cards/) |
| `UserDetailView` |  `GET` | `/user/id` |  |
| `UserGridView` | `GET` | `/users` | [MUI Grid](https://mui.com/components/grid/) of `UserCardView`s |

### Forms
| Component | Method | Endpoint | Remarks |
| --------- | ------ | -------- | ------  |
| `UserCreateForm` | `POST` | `/users` |  |
| `UserUpdateForm` |  `PUT` | `/user/id` |  |
| `UserDeleteForm` | `DELETE` | `/user/id` |  |

## Order

### Views

| Component | Method | Endpoint | Remarks |
| --------- | ------ | -------- | ------  |
| `OrderListItemView` | - | - | [MUI List Item](https://mui.com/api/list-item/) |
| `OrderDetailView` |  `GET` | `/order/id` |  |
| `OrderListView` | `GET` | `/orders` | [MUI List](https://mui.com/components/lists/) of `OrderListItemView`s |

### Forms
| Component | Method | Endpoint | Remarks |
| --------- | ------ | -------- | ------  |
| `OrderCreateForm` | `POST` | `/orders` |  |
| `OrderUpdateForm` |  `PUT` | `/order/id` |  |
| `OrderDeleteForm` | `DELETE` | `/order/id` |  |

## Cart

### Views
| Component | Method | Endpoint | Remarks |
| --------- | ------ | -------- | ------  |
| `CartView` | `GET` | `/cart` |  |

## Authentication
### Forms
| Component | Method | Endpoint | Remarks |
| --------- | ------ | -------- | ------  |
| `SignUpForm` | | | related to `UserCreateForm` |
| `SignInForm` | | |  |
