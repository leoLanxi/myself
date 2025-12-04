import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AIChat from './AIChat';

const Resume: React.FC = () => {
  const enableChat = (import.meta as any).env?.VITE_ENABLE_CHAT === 'true';
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="pt-24">
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">个人简历 | 赵蓝希</h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1 space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">联系方式</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>电话：(+86) 18800313697</li>
                    <li>邮箱：<a href="mailto:zlxworkmail@163.com" className="text-blue-600">zlxworkmail@163.com</a></li>
                    <li>职位：后端工程师</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">专业技能</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>Golang：slice/map/channel 原理，内存管理、GC，GMP 调度</li>
                    <li>Go 生态：Gin、GORM、Kratos</li>
                    <li>MySQL：MVCC、索引、事务，SQL 优化与分库分表</li>
                    <li>Redis：数据结构、持久化、主从复制、过期删除、淘汰策略；缓存一致性与高并发</li>
                    <li>算法与数据结构：树、链表、栈、队列、回溯等</li>
                    <li>操作系统与 Linux：常用命令与进程/线程、IPC、写时复制、I/O 多路复用、零拷贝</li>
                    <li>MQ：Kafka 基本概念与场景</li>
                    <li>计算机网络：TCP/IP，三次握手/四次挥手、流量与拥塞控制、慢启动、断点续传</li>
                    <li>设计模式：单例、工厂、责任链等</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">其他荣誉</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>百度优秀红度</li>
                    <li>CET6、研究生学业奖学金、上海科技大学优秀个人</li>
                    <li>上海科技大学丹麦校园大使</li>
                    <li>数模竞赛上海赛区二等奖、IEEE 一作、医学超声专利</li>
                    <li>河南省数学竞赛省级二等奖</li>
                    <li>乒乓球比赛豫西地区二等奖</li>
                  </ul>
                </div>
              </div>

              <div className="md:col-span-2 space-y-8">
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">教育背景</h3>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <p className="font-medium">中科院-上海科技大学（双一流） | 电子科学与技术 | 硕士学位</p>
                      <p className="text-sm text-gray-500">2020.09 - 2023.07 · IEEE 一作会议、专利一项、硕士奖学金</p>
                    </div>
                    <div>
                      <p className="font-medium">中科院-上海科技大学（双一流） | 电子信息工程 | 学士学位</p>
                      <p className="text-sm text-gray-500">2016.09 - 2020.07 · 优秀个人、CET6、保研</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">工作经历</h3>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <p className="font-medium">百度 · 搜索垂类架构部 | 后端开发</p>
                      <p className="text-sm text-gray-500">2023.08 - 至今 · 垂类业务接入中台，提供接入框架与线上垂类 APP 管理</p>
                      <ul className="list-disc pl-6 mt-3 space-y-2">
                        <li>通用框架项目：收集架构痛点并提出通用方案，独立完成 Takeaway 异步框架、经天 Clock 定时服务</li>
                        <li>平台核心开发：完成数据透视、APP 扩缩容管理，并持续升级架构满足业务接入</li>
                        <li>架构稳定性：值周、排查返回字段错误、延迟过高、内存泄漏、扩缩容等问题</li>
                        <li>旧模块维护：仿真系统维护，提供上线前性能压测与结果比对</li>
                      </ul>
                      <div className="mt-4">
                        <p className="font-medium">主要成果</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                          <li>Takeaway 异步框架：异步场景开发周期从两周缩短至 3 天</li>
                          <li>经天 Clock 定时服务：满足多场景定时需求，支持多次业务任务</li>
                          <li>APP 流量迁移：设计切流回滚与 Quota 管理，支持多次扩缩容与 20+ 次迭代，输出文档 10+ 篇、宣讲 2 次</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">项目经历</h3>
                  <div className="space-y-6 text-gray-700">
                    <div>
                      <p className="font-medium">TakeAway 异步处理框架 | 2024.03 - 2024.06</p>
                      <p className="text-sm text-gray-500">支持自动调度、自动续做与重试、灵活任务配置的异步任务框架</p>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>架构设计：拆分为 flowsvr（HTTP 管理与调度）与 worker（任务消费）</li>
                        <li>数据与分表设计：低耦合任务表与按大小迭代分表逻辑，优化性能</li>
                        <li>多机竞争优化：MySQL 行级锁优化为 Redis 分布式锁</li>
                        <li>性能优化：通过连接池、缓存与减少竞争将创建拉取任务 QPS 从 400 提升至 3000</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">经天 Clock 定时任务平台 | 2024.09 - 2024.12</p>
                      <p className="text-sm text-gray-500">基于 Go 的高精准、高负载定时微服务系统</p>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>微服务设计：基于 Kratos，存储采用 MySQL+Redis 二级结构与数据分片</li>
                        <li>可靠性：状态重试与定期扫描实现 at least once</li>
                        <li>模块化：调度、迁移、执行三模块 + 两协程池，降低维护成本</li>
                        <li>高精准与高负载：冷热分区与 Redis ZSET 分片，控制误差至 1 秒内</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">App Engine 管理平台 | 2023.09 - 至今</p>
                      <p className="text-sm text-gray-500">管理 400+ 垂类 APP，提供搜索接入与异步流量分发</p>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>性能优化：解决内存泄漏、数据库高 CPU 与慢查询，保障响应速度</li>
                        <li>核心功能：对接智能云平台实现扩缩容与快速审批，接入监控可视化</li>
                        <li>稳定性建设：Prometheus+Grafana 监控关键指标，SLA 提升至 99.99%</li>
                        <li>迁移优化：迁移至 FaaS 平台，内存使用降低 90%+</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {enableChat && <AIChat />}
    </div>
  );
};

export default Resume;
