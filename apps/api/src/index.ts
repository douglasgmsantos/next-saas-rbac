import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'ADMIN', id: 'user_id' })

// const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeletOtherUser = ability.can('delete', 'User')
const userCannotDeletOtherUser = ability.cannot('delete', 'User')

// console.log(userCanInviteSomeoneElse)
console.log(userCanDeletOtherUser)
console.log(userCannotDeletOtherUser)
