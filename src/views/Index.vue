<template>
  <div class="index">
    <Table :table-data="tableData" />
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Table.vue'

export default {
  name: 'Index',
  components: {
    Table
  },
  data () {
    return {
      tableData: [
        {
          area: '台中',
          brand: [
            {
              name: '店1',
              vacancies: [
                {
                  field: '外場',
                  posiotn: '儲備幹部',
                  salary: '月薪上看45K'
                },
                {
                  field: '外場',
                  posiotn: '正職人員',
                  salary: '月薪上看45K'
                },
                {
                  field: '外場',
                  posiotn: '兼職人員',
                  salary: '時薪160~200元'
                },
                {
                  field: '內場',
                  posiotn: '儲備幹部',
                  salary: '月薪上看45K'
                },
                {
                  field: '內場',
                  posiotn: '正職人員',
                  salary: '月薪上看45K'
                },
                {
                  field: '內場',
                  posiotn: '兼職人員',
                  salary: '時薪160~200元'
                }
              ]
            }
          ]
        },
        {
          area: '彰化',
          brand: [
            {
              name: '店1',
              vacancies: [
                {
                  field: '外場',
                  posiotn: '儲備幹部',
                  salary: '月薪上看45K'
                },
                {
                  field: '外場',
                  posiotn: '正職人員',
                  salary: '月薪上看45K'
                },
                {
                  field: '外場',
                  posiotn: '兼職人員',
                  salary: '時薪160~200元'
                },
                {
                  field: '內場',
                  posiotn: '儲備幹部',
                  salary: '月薪上看45K'
                },
                {
                  field: '內場',
                  posiotn: '正職人員',
                  salary: '月薪上看45K'
                },
                {
                  field: '內場',
                  posiotn: '兼職人員',
                  salary: '時薪160~200元'
                }
              ]
            }
          ]
        },
        {
          area: '台南',
          brand: [
            {
              name: '店1',
              vacancies: [
                {
                  field: '外場',
                  posiotn: '儲備幹部',
                  salary: '月薪上看45K'
                },
                {
                  field: '外場',
                  posiotn: '正職人員',
                  salary: '月薪上看45K'
                },
                {
                  field: '外場',
                  posiotn: '兼職人員',
                  salary: '時薪160~200元'
                },
                {
                  field: '內場',
                  posiotn: '儲備幹部',
                  salary: '月薪上看45K'
                },
                {
                  field: '內場',
                  posiotn: '正職人員',
                  salary: '月薪上看45K'
                },
                {
                  field: '內場',
                  posiotn: '兼職人員',
                  salary: '時薪160~200元'
                }
              ]
            }
          ]
        },
        {
          area: '高雄',
          brand: [
            {
              name: '店1',
              vacancies: [
                {
                  field: '外場',
                  posiotn: '儲備幹部',
                  salary: '月薪上看45K'
                },
                {
                  field: '外場',
                  posiotn: '正職人員',
                  salary: '月薪上看45K'
                },
                {
                  field: '外場',
                  posiotn: '兼職人員',
                  salary: '時薪160~200元'
                },
                {
                  field: '內場',
                  posiotn: '儲備幹部',
                  salary: '月薪上看45K'
                },
                {
                  field: '內場',
                  posiotn: '正職人員',
                  salary: '月薪上看45K'
                },
                {
                  field: '內場',
                  posiotn: '兼職人員',
                  salary: '時薪160~200元'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
.index{
  text-align: center;
}
</style>
