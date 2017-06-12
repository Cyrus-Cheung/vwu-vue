<template>
    <div class="app-container">
        <el-table :data="list" border style="width: 100%">
            <el-table-column label="序号" align="center" width="65">
                <template scope="scope">
                    <span>{{ scope.row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column width="180px" align="center" label="时间">
                <template scope="scope">
                    <span>{{ scope.row.timestamp }}</span>
                </template>
            </el-table-column>
            <el-table-column label="标题" min-width="300">
                <template scope="scope">
                    <span>{{ scope.row.title }}</span>
                </template>
            </el-table-column>
            <el-table-column label="专栏" align="center" min-width="160">
                <template scope="scope">
                    <span>{{ scope.row.column }}</span>
                </template>
            </el-table-column>
            <el-table-column label="小编" align="center" width="120">
                <template scope="scope">
                    <span>{{ scope.row.author }}</span>
                </template>
            </el-table-column>
            <el-table-column label="阅读数" align="center" width="95">
                <template scope="scope">
                    <span>{{ scope.row.pageviews }}</span>
                </template>
            </el-table-column>
            <el-table-column label="状态" align="center" width="90">
                <template scope="scope">
                    <el-tag type="success">{{ scope.row.status }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center" width="150">
                <template scope="scope">
                    <el-button size="small" type="success">编辑</el-button>
                    <el-button size="small" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div><el-button @click="getList">test</el-button></div>
        <!--<div class="pagination-container">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1" :page-sizes="[10, 20, 30, 50]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
        </div>-->
    </div>
</template>

<<script>
import { fetchList } from '../../api/article'

export default {
  name: 'articleList',
  data () {
    return {
      list: null,
      total: null,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      }
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      fetchList(this.listQuery).then((response) => {
        console.log(response)
        this.list = response.data.list
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
