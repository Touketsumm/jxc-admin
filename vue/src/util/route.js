import {isEmpty} from "@/util"
import router from '@/router'
import {mutations as tagsViewMutations} from "@/layout/store/tagsView"

export function closeCurrentPage(next) {
    tagsViewMutations.delView(router.currentRoute)
    !isEmpty(next) && router.replace(next)
}
