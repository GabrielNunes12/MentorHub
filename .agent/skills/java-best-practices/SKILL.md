---
name: java-best-practices
description: Java development principles, decision-making, and best practices. Covers Spring Boot, modern Java features (17/21+), build tools, and architecture.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Java Best Practices

> Principles and decision-making for Java development in 2025.
> **Learn to THINK, not memorize code patterns.**

---

## ⚠️ How to Use This Skill

This skill teaches **decision-making principles**, not fixed code to copy.

- ASK user for preferences (JDK version, Framework)
- Choose framework based on CONTEXT
- Don't default to Spring Boot for everything (consider Quarkus, Micronaut, or plain Java)

---

## 1. Java Version & Features (2025)

### LTS Version Strategy

| Version | Status | Use When |
|---------|--------|----------|
| **Java 21 (LTS)** | Current Standard | New projects, Virtual Threads needed |
| **Java 17 (LTS)** | Minimum Viable | Legacy constraints, libraries not ready for 21 |
| **Java 8/11** | Legacy | Maintenance only. Plan migration. |

### Modern Features to Use

```java
// Records (Java 16+) - Data Carriers
public record User(String name, String email) {}

// Switch Expressions (Java 14+)
var result = switch(day) {
    case MONDAY, FRIDAY -> "Work";
    case SATURDAY, SUNDAY -> "Rest";
    default -> "Mid-week";
};

// Virtual Threads (Java 21+) - High Concurrency
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -> process());
}

// Text Blocks (Java 15+)
String json = """
    {
      "name": "John"
    }
    """;
```

---

## 2. Framework Selection

### Decision Tree

```
What are you building?
│
├── Enterprise / Microservices / Standard
│   └── Spring Boot 3+ (Mature, huge ecosystem)
│
├── Cloud Native / Serverless / Startup speed
│   └── Quarkus (Fast startup, low memory)
│   └── Micronaut (Compilation-time DI)
│
├── Simple API / CLI
│   └── Javalin (Lightweight)
│   └── Plain Java (No framework)
│
└── Reactive Systems
    └── Spring WebFlux or Vert.x
```

### Selection Principles

| Factor | Spring Boot | Quarkus | Micronaut |
|--------|-------------|---------|-----------|
| **Best for** | Standard Enterprise | K8s, Serverless | Low Memory |
| **Startup** | Slower | Lightning | Fast |
| **Reflection** | Heavy Runtime | Build-time | Build-time |
| **Ecosystem** | Massive | Growing | Good |
| **Learning** | Medium | Medium | Medium |

---

## 3. Build Tool Decision

| Tool | Characteristics | Use When |
|------|-----------------|----------|
| **Maven** | XML, Declarative, Rigid | Standard corp, simple lifecycle, stability is key |
| **Gradle** | Groovy/Kotlin, Imperative, Flexible | Complex builds, mono-repos, performance (incremental builds) |
| **Bazel** | Hermetic, Scalable | Google-scale mono-repos (rarely needed for small projects) |

**Recommendation**: Default to **Maven** for simplicity unless Gradle features are specifically needed.

---

## 4. Architecture Principles

### Layered Architecture (Standard)

```
Controller (Web/API)
   ↓
Service (Business Logic)
   ↓
Repository (Data Access)
   ↓
Database
```

### Hexagonal / Clean Architecture (Complex Domain)

```
       Inbound Adapters (Rest, GQL)
              ↓
    ┌──────────────────────┐
    │     Application      │
    │   (Use Cases/Ports)  │
    │                      │
    │      Domain          │
    │   (Entities/Rules)   │
    └──────────────────────┘
              ↓
      Outbound Adapters (DB, External API)
```

**Rule**: Don't over-engineer. Start Layered, evolve to Hexagonal if domain complexity demands it.

---

## 5. Coding Best Practices

### Null Safety
- **Avoid `null`**.
- Use `Optional<T>` for return types that might be missing.
- **NEVER** use `Optional` in arguments or fields (serializability issues).

### Immutability
- Prefer `final` variables.
- Use `record` for immutable data structures.
- Use `List.of()`, `Set.of()` (unmodifiable collections).

### Exception Handling
- **Checked Exceptions**: Recoverable conditions (e.g., IO retry).
- **Unchecked Exceptions**: Programming errors (e.g., NullPointer, Validation).
- **Architecture**:
    - Catch exceptions at the boundary (Controller/Global Handler).
    - Throw custom domain exceptions from Service layer (`UserNotFoundException`).
    - Don't swallow exceptions (`catch (e) { e.printStackTrace() }` is BAD).

### Streams vs Loops
- **Streams**: Transformations, filter/map/reduce. Readable for data processing.
- **Loops**: performance-critical logic, modifying local state, early exit/break needed (complex).

---

## 6. Testing Principles

### Tools
- **Framework**: JUnit 5 (Jupiter).
- **Mocking**: Mockito.
- **Integration**: Testcontainers (Docker-based DBs/Services).
- **Assertions**: AssertJ (Fluent API: `assertThat(result).isEqualTo(expected)`).

### Testing Pyramid
1.  **Unit**: Fast, mock dependencies. Test logic.
2.  **Integration**: Test DB queries, API contracts. Use Testcontainers.
3.  **E2E**: Full flow.

---

## 7. Anti-Patterns to Avoid

- **God Classes**: massive Service/Controller classes. Split by feature.
- **Anemic Domain Model**: POJOs with only getters/setters. Put logic in domain objects.
- **Swallowing Exceptions**: Empty catch blocks.
- **Field Injection**: `@Autowired` on fields. Use **Constructor Injection** (easier testing).
- **Return Null**: Return `Optional.empty()` or throw exception.

---

## 8. Decision Checklist

Before implementing:

- [ ] **JDK Version**: Is it 21 (preferred) or 17?
- [ ] **Build Tool**: Maven or Gradle?
- [ ] **Framework**: Spring Boot 3+?
- [ ] **DB Access**: JPA/Hibernate (Complex rels) or JDBC/jOOQ (SQL control)?
- [ ] **Testing**: Is Testcontainers setup?
- [ ] **Lombok**: Using it for boilerplate (or Records)?

---

> **Remember**: Java is evolving. Don't write Java 8 code in 2025. Use modern features like Records, var, and Switch Expressions.
