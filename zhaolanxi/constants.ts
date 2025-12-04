import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "赵蓝希",
  title: "后端工程师",
  contact: {
    phone: "(+86) 18800313697",
    email: "zlxworkmail@163.com",
    location: "中国" // Implied
  },
  education: [
    {
      school: "中科院-上海科技大学 (双一流)",
      degree: "硕士学位 - 电子科学与技术",
      period: "2020.09 - 2023.07",
      details: [
        "IEEE 一作会议一篇",
        "专利一项",
        "硕士奖学金"
      ],
      tags: ["Master"]
    },
    {
      school: "中科院-上海科技大学 (双一流)",
      degree: "学士学位 - 电子信息工程",
      period: "2016.09 - 2020.07",
      details: [
        "上科大优秀个人",
        "CET6",
        "保研",
        "录取分数线同上游 985"
      ],
      tags: ["Bachelor"]
    }
  ],
  experience: [
    {
      company: "百度搜索垂类架构部",
      role: "后端开发",
      period: "2023.08 - 至今",
      description: "负责百度搜索垂类业务接入中台，提供搜索垂类接入框架，管理线上垂类 APP。",
      achievements: [
        "通用框架项目开发者：负责收集架构业务常见痛点，提出通用性解决方案。独立完成 Takeaway 异步框架和经天 Clock 定时服务。",
        "平台核心开发者：负责完成平台数据透视、APP 扩缩容管理等开发工作，根据业务反馈升级架构。",
        "架构稳定性负责人：负责值周工作，解决线上业务返回字段错误、延迟过高、内存泄漏、扩缩容等问题。",
        "旧模块维护：接手仿真系统，解决因服务变迁造成的遗留问题，提供上线前性能压测、结果比对等功能。",
        "成果：异步场景开发周期从两周缩短为 3 天；满足三次业务方定时任务需求；APP 流量迁移支持 10W QPS 切流，20+ 次业务迭代。"
      ]
    }
  ],
  projects: [
    {
      name: "App Engine 管理平台",
      role: "核心开发者 & 稳定性负责人",
      period: "2023.9 - 至今",
      description: "负责百度 400+ 垂类 APP 管理，提供搜索接入框架、异步流量分发。",
      tags: ["Prometheus", "Grafana", "FaaS", "Performance Tuning"],
      responsibilities: [
        "性能优化：解决 APP 内存泄漏，排查数据库 CPU 使用率过高及慢查询问题。",
        "稳定性建设：开发服务监控治理模块，使用 Prometheus 监控流量，Grafana 可视化。",
        "架构升级：迁移部分业务服务至厂内 FaaS 平台，降低内存使用 90% 以上。",
        "切流回滚：设计切流回滚方案，确保服务在整个切流过程稳定。"
      ],
      challenges: [
        "完成 10W QPS 服务切流。",
        "使用 pprof 解决内存泄漏，将 SLA 从 98% 提升到 99.99%。",
        "慢 SQL 治理：通过拆分、读写分离、索引优化，将主库 CPU 从 300% 降至 80%，慢查询从 2s 优化至 100ms。"
      ]
    },
    {
      name: "Takeaway 异步处理框架",
      role: "架构设计 & 核心开发",
      period: "2024.3 - 2024.6",
      description: "支持任务自动调度、自动续做与重试、灵活任务配置的异步任务处理框架。",
      tags: ["Golang", "MySQL", "Redis", "Distributed Lock"],
      responsibilities: [
        "架构设计：分为 flowsvr (HTTP服务/管理) 和 worker (消费) 两层。",
        "数据库设计：低耦合的任务信息表、配置表、位置表设计。",
        "分表逻辑：设计全新的分表逻辑，支持按大小迭代新表。",
        "架构优化：多机竞争由 MySQL 行级锁优化为 Redis 分布式锁。"
      ],
      challenges: [
        "性能调优：通过连接池、缓存、减少竞争，QPS 从 400 优化至 3000。",
        "分表方案：解决业界 MyCat 等不支持按大小拆分的痛点，实现动态迭代分表。",
        "多机竞争：在 worker 侧引入 Redis 分布式锁解决多机竞争问题。"
      ]
    },
    {
      name: "经天 Clock 定时任务平台",
      role: "独立设计 & 开发",
      period: "2024.9 - 2024.12",
      description: "基于 Go 语言开发的定时微服务系统，支持高精准、高负载的定时需求处理。",
      tags: ["Go", "Kratos", "Redis ZSET", "Microservices"],
      responsibilities: [
        "微服务设计：基于 Kratos 框架，对比时间轮算法后完成设计。",
        "存储设计：MySQL+Redis 二级存储、数据分片、冷热分区。",
        "兜底机制：状态重试与定期扫描实现 at least once。",
        "模块化：调度、迁移、执行三模块 + 两协程池架构。"
      ],
      challenges: [
        "高精准：误差控制在 1 秒以内（冷热分区+高频扫描）。",
        "高负载：利用 Redis ZSET 数据分片 + Go 协程池加速读取。",
        "冷热分离：开发迁移模块，确保热数据始终在缓存中。"
      ]
    }
  ],
  skills: [
    {
      category: "编程语言 & 生态",
      items: [
        "Golang (熟悉 Slice/Map/Channel 底层, GC, GMP)",
        "Gin", "GORM", "Kratos"
      ]
    },
    {
      category: "数据库 & 中间件",
      items: [
        "MySQL (MVCC, 索引, 事务, SQL优化, 分库分表)",
        "Redis (持久化, 主从, 缓存一致性, 分布式锁)",
        "Kafka (基本概念, 消息队列场景)"
      ]
    },
    {
      category: "计算机基础",
      items: [
        "数据结构与算法 (树, 链表, 栈, 队列, 回溯)",
        "操作系统 (Linux常用命令, 进程/线程, I/O多路复用, 零拷贝)",
        "计算机网络 (TCP/IP, TCP/UDP, 三次握手, 拥塞控制)",
        "设计模式 (单例, 工厂, 责任链)"
      ]
    }
  ],
  honors: [
    "百度优秀红度",
    "CET6",
    "研究生学业奖学金",
    "上海科技大学优秀个人",
    "上海科技大学丹麦校园大使",
    "大学生数学建模竞赛上海赛区二等奖",
    "河南省数学竞赛省级二等奖",
    "乒乓球比赛豫西地区二等奖"
  ]
};